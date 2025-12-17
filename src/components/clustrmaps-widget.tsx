"use client";

import { useEffect } from "react";
import Script from "next/script";

export function ClustrMapsWidget() {
  // ClustrMaps 站点 ID
  const siteId = "wuBlhiVI3f9XcFVumFREQbzFU3WgcWCqwR-bRIOMJOI";

  return (
    <div className="flex flex-col items-center justify-center mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-2">
        访问统计
      </p>
      {/* 使用 Next.js Script 组件加载 ClustrMaps 官方脚本 */}
      <Script
        id="clustrmaps"
        src={`//clustrmaps.com/map_v2.js?d=${siteId}`}
        strategy="afterInteractive"
      />
      {/* ClustrMaps 脚本会自动在这里渲染地图 */}
      <div id="clustrmaps-widget" style={{ minHeight: "100px" }}></div>
      {/* 备用图片链接（如果 JavaScript 失败） */}
      <a
        href="http://www.clustrmaps.com/map/Pyywill.github.io"
        title="Visit tracker for Pyywill.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2"
      >
        <img
          src={`//www.clustrmaps.com/map_v2.png?d=${siteId}`}
          alt="Visit tracker"
          style={{ maxWidth: "100%", height: "auto" }}
          loading="lazy"
        />
      </a>
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

