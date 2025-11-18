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
    // 使用 CountAPI 免费服务来统计访问次数
    // 如果 API 失败，使用 localStorage 作为备用方案
    const counterName = namespace || "pyywill-github-io";
    const hitUrl = `https://api.countapi.xyz/hit/${counterName}/visits`;

    // 尝试使用 CountAPI
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5秒超时

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
        // CountAPI 返回格式: { value: number }
        if (data && typeof data.value === "number") {
          setCount(data.value);
          setLoading(false);
          return;
        }
        throw new Error("Invalid response format");
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        // 如果 API 失败，使用 localStorage 作为备用
        console.warn("CountAPI failed, using localStorage fallback:", error);
        
        const storageKey = `visit_count_${counterName}`;
        const storedCount = localStorage.getItem(storageKey);
        let localCount = storedCount ? parseInt(storedCount, 10) : 0;
        
        // 增加本地计数
        localCount += 1;
        localStorage.setItem(storageKey, localCount.toString());
        
        setCount(localCount);
        setLoading(false);
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
  return (
    <div className="text-center mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <p className="text-xs text-neutral-500 dark:text-neutral-500">
        总访问次数:{" "}
        <span className="font-semibold text-neutral-700 dark:text-neutral-300">
          {count !== null ? count.toLocaleString() : "—"}
        </span>
      </p>
    </div>
  );
}

