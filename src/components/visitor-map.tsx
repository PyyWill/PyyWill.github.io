"use client";

import { useEffect, useRef, useMemo, useState } from "react";

interface ClustrMapsColors {
  /** 陆地颜色 (Land Color) */
  landColor?: string;
  /** 海洋颜色 (Ocean Color) */
  oceanColor?: string;
  /** 过去访问者颜色 (Past Visitors) */
  pastVisitorsColor?: string;
  /** 最近访问者颜色 (Recent Visitors) */
  recentVisitorsColor?: string;
  /** 文字颜色 (Text Color) */
  textColor?: string;
}

interface VisitorMapProps {
  /**
   * ClustrMaps 站点 ID
   * 在 https://clustrmaps.com 注册后获取
   * 如果未提供，将显示占位符
   */
  siteId?: string;
  /**
   * 地图颜色配置
   * 默认使用与网站风格匹配的暖色调
   */
  colors?: ClustrMapsColors;
}

// 默认颜色配置 - 与网站背景色 #FFFCF8 匹配的暖色调
const defaultColors: Required<ClustrMapsColors> = {
  landColor: "d3986b", // 浅棕色
  oceanColor: "fffcf8", // 与网站背景色匹配
  pastVisitorsColor: "bd6827", // 橙棕色
  recentVisitorsColor: "f6c85b", // 浅黄色/金色
  textColor: "ffffff", // 白色
};

export function VisitorMap({ siteId, colors }: VisitorMapProps) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [isLocalhost, setIsLocalhost] = useState(false);

  // 检测是否是 localhost 或开发环境
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      setIsLocalhost(
        hostname === "localhost" ||
          hostname === "127.0.0.1" ||
          hostname === "0.0.0.0" ||
          hostname.includes("localhost")
      );
    }
  }, []);

  // 合并默认颜色和用户自定义颜色，使用 useMemo 避免不必要的重新计算
  const mapColors = useMemo(
    () => ({
      landColor: colors?.landColor?.replace("#", "") || defaultColors.landColor,
      oceanColor:
        colors?.oceanColor?.replace("#", "") || defaultColors.oceanColor,
      pastVisitorsColor:
        colors?.pastVisitorsColor?.replace("#", "") ||
        defaultColors.pastVisitorsColor,
      recentVisitorsColor:
        colors?.recentVisitorsColor?.replace("#", "") ||
        defaultColors.recentVisitorsColor,
      textColor: colors?.textColor?.replace("#", "") || defaultColors.textColor,
    }),
    [
      colors?.landColor,
      colors?.oceanColor,
      colors?.pastVisitorsColor,
      colors?.recentVisitorsColor,
      colors?.textColor,
    ]
  );

  // 只在生产环境（非 localhost）加载 ClustrMaps JavaScript
  useEffect(() => {
    if (!siteId || isLocalhost) return;

    // 检查是否已经加载过脚本
    if (document.getElementById("clustrmaps")) {
      return;
    }

    // ClustrMaps 访问统计地图脚本
    // 使用 ClustrMaps 标准方式：脚本 ID 必须是 "clustrmaps"
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "clustrmaps";
    script.src = `//cdn.clustrmaps.com/map_v2.js?cl=${mapColors.landColor}&w=a&t=tt&d=${siteId}&co=${mapColors.oceanColor}&cmo=${mapColors.pastVisitorsColor}&cmn=${mapColors.recentVisitorsColor}&ct=${mapColors.textColor}`;
    script.async = true;

    // 将脚本添加到 body 标签内（ClustrMaps 要求）
    document.body.appendChild(script);

    return () => {
      // 清理脚本
      const scriptToRemove = document.getElementById("clustrmaps");
      if (scriptToRemove && scriptToRemove.parentNode) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, [siteId, mapColors, isLocalhost]);

  if (!siteId) {
    return (
      <div className="flex flex-col items-center justify-center mt-8">
        <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-2">
          访问统计
        </p>
        <div className="text-center p-4 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-neutral-50 dark:bg-neutral-900">
          <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-2">
            请在 aboutme.ts 中配置 ClustrMaps 站点 ID
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-600">
            访问{" "}
            <a
              href="https://clustrmaps.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
            >
              ClustrMaps
            </a>{" "}
            注册并获取站点 ID
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-2">
        访问统计
      </p>
      {isLocalhost && siteId && (
        <p className="text-xs text-amber-600 dark:text-amber-500 mb-2 text-center max-w-md">
          ⚠️ 开发环境提示：ClustrMaps 仅在生产环境（如 github.io）正常工作。
          <br />
          当前显示静态地图预览，完整功能将在部署后生效。
        </p>
      )}
      <div
        ref={widgetRef}
        className="flex items-center justify-center"
        style={{ minHeight: "100px" }}
      >
        {/* 在 localhost 只显示静态图片，在生产环境加载 JavaScript */}
        {siteId && (
          <a
            href={`https://clustrmaps.com/site/${siteId}`}
            title="Visit tracker"
            className="clustrmaps-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`//www.clustrmaps.com/map_v2.png?cl=${mapColors.landColor}&w=a&t=tt&d=${siteId}&co=${mapColors.oceanColor}&cmo=${mapColors.pastVisitorsColor}&cmn=${mapColors.recentVisitorsColor}&ct=${mapColors.textColor}`}
              alt="Visit tracker"
              style={{ maxWidth: "100%", height: "auto" }}
              loading="lazy"
            />
          </a>
        )}
      </div>
      <p className="text-xs text-neutral-400 dark:text-neutral-600 mt-2">
        <a
          href="https://clustrmaps.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
        >
          ClustrMaps
        </a>
      </p>
    </div>
  );
}

