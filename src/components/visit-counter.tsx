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
    // 通过 Next.js API route 调用 CountAPI，避免 CORS 问题
    // 这样可以实现真正的全局访问统计
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒超时

    fetch("/api/visit-count", {
      method: "GET",
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
        if (data.success && typeof data.count === "number") {
          setCount(data.count);
          setLoading(false);
        } else {
          throw new Error("Invalid response format");
        }
      })
      .catch((error) => {
        clearTimeout(timeoutId);
        console.error("Failed to fetch visit count:", error);
        // 如果 API 失败，显示错误但不使用 localStorage（因为需要全局统计）
        setLoading(false);
        // 可以选择显示一个提示，或者显示 0
        setCount(null);
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

