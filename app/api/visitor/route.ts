import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";

const redis = Redis.fromEnv();

export async function GET() {
  try {
    const cookieStore = await cookies();
    const visitor = cookieStore.get("visitor");

    if (visitor) {
      const number = Number(visitor.value);
      if (!Number.isNaN(number) && number > 0) {
        return Response.json({ count: number });
      }

      if (visitor.value === "true") {
        const count = (await redis.get<number>("visitors")) ?? 1;
        cookieStore.set("visitor", String(count), {
          maxAge: 60 * 60 * 24 * 365,
          path: "/",
          httpOnly: true,
          sameSite: "lax",
        });
        return Response.json({ count });
      }
    }

    let count: number;

    try {
      count = await redis.incr("visitors");
    } catch (error) {
      console.error("Redis incr failed — use a read-write Upstash token:", error);
      count = (await redis.get<number>("visitors")) ?? 0;
    }

    cookieStore.set("visitor", String(count), {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });

    return Response.json({ count });
  } catch (error) {
    console.error("Visitor API error:", error);
    return Response.json({ count: 0 }, { status: 500 });
  }
}
