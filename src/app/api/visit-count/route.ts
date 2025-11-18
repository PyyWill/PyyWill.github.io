import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 使用 CountAPI 免费服务来统计访问次数
    // 通过服务器端调用避免 CORS 问题
    const counterName = "pyywill-github-io";
    const hitUrl = `https://api.countapi.xyz/hit/${counterName}/visits`;

    const response = await fetch(hitUrl, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
      // 服务器端请求不需要 CORS
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data && typeof data.value === "number") {
      return NextResponse.json({ count: data.value, success: true });
    }

    throw new Error("Invalid response format");
  } catch (error) {
    console.error("Failed to fetch visit count:", error);
    return NextResponse.json(
      { error: "Failed to fetch visit count", success: false },
      { status: 500 }
    );
  }
}

