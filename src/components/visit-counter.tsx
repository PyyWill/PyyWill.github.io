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
    // 不需要注册，直接使用即可
    const counterName = namespace || "pyywill-github-io";
    const apiUrl = `https://api.countapi.xyz/hit/${counterName}/visits`;

    // 获取当前访问次数
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.value !== undefined) {
          setCount(data.value);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch visit count:", error);
        setLoading(false);
      });
  }, [namespace]);

  if (loading) {
    return (
      <div className="text-center mt-8">
        <p className="text-xs text-neutral-400 dark:text-neutral-600">
          加载中...
        </p>
      </div>
    );
  }

  if (count === null) {
    return null;
  }

  return (
    <div className="text-center mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <p className="text-xs text-neutral-500 dark:text-neutral-500">
        总访问次数: <span className="font-semibold text-neutral-700 dark:text-neutral-300">{count.toLocaleString()}</span>
      </p>
    </div>
  );
}

