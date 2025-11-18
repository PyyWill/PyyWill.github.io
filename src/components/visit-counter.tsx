"use client";

import { useEffect, useState } from "react";

interface VisitCounterProps {
  /**
   * 计数器命名空间（用于区分不同的计数器）
   * 默认使用网站域名
   */
  namespace?: string;
}

export function VisitCounter({ namespace }: VisitCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 直接调用 CountAPI（静态导出不支持 API routes）
    // 先增加计数，然后获取最新值
    const counterName = namespace || "pyywill-github-io";
    const hitUrl = `https://api.countapi.xyz/hit/${counterName}/visits`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒超时

    // 先增加计数（hit），这会返回增加后的值
    fetch(hitUrl, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      signal: controller.signal,
    })
      .then((response) => {
        clearTimeout(timeoutId);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // CountAPI hit 端点返回格式: { value: number }
        if (data && typeof data.value === "number") {
          setCount(data.value);
          setLoading(false);
        } else {
          throw new Error("Invalid response format");
        }
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        console.error("Failed to fetch visit count:", error);
        // 如果 hit 失败，尝试只获取当前值（不增加）
        return fetch(`https://api.countapi.xyz/get/${counterName}/visits`, {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            if (data && typeof data.value === "number") {
              setCount(data.value);
              setLoading(false);
            } else {
              throw new Error("Invalid response format");
            }
          })
          .catch((finalError) => {
            console.error("Both hit and get failed:", finalError);
            setLoading(false);
            setCount(null);
          });
      });
  }, [namespace]);

  // 如果正在加载，显示加载状态
  if (loading) {
    return (
      <div className="text-center mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs text-neutral-400 dark:text-neutral-600">
          加载中...
        </p>
      </div>
    );
  }

  // 显示访问次数
  if (count === null) {
    return (
      <div className="text-center mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs text-neutral-400 dark:text-neutral-600">
          访问统计暂时不可用
        </p>
      </div>
    );
  }

  return (
    <div className="text-center mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <p className="text-xs text-neutral-500 dark:text-neutral-500">
        总访问次数:{" "}
        <span className="font-semibold text-neutral-700 dark:text-neutral-300">
          {count.toLocaleString()}
        </span>
      </p>
    </div>
  );
}

