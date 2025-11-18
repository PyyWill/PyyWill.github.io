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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 使用 CountAPI 免费服务来统计访问次数
    // 不需要注册，直接使用即可
    const counterName = namespace || "pyywill-github-io";
    const apiUrl = `https://api.countapi.xyz/hit/${counterName}/visits`;

    // 获取当前访问次数
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // CountAPI 返回格式: { value: number }
        if (data && typeof data.value === "number") {
          setCount(data.value);
          setError(null);
        } else {
          console.warn("Unexpected API response:", data);
          setError("Invalid response");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch visit count:", error);
        setError(error.message || "Failed to load");
        setLoading(false);
        // 即使失败也显示一个默认值，让用户知道功能存在
        setCount(0);
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

  // 如果出错，仍然显示计数器（显示错误或默认值）
  if (error && count === null) {
    return (
      <div className="text-center mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <p className="text-xs text-neutral-400 dark:text-neutral-600">
          访问统计暂时不可用
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

