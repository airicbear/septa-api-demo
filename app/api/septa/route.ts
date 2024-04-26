import { NextRequest, NextResponse } from "next/server";
import { SEPTA_API_ALL_DATA, SEPTA_API_BASE_URL } from "../../constants/api-constants";


export async function GET(req: NextRequest) {
    const endpoint = req.nextUrl.searchParams.get("endpoint");
    if (SEPTA_API_ALL_DATA.includes(endpoint ?? "")) {
        const res = await fetch(`${SEPTA_API_BASE_URL}${endpoint}${req.nextUrl.searchParams}`, {
            headers: {
                "accept": "application/json",
            },
        });
        const data = await res.json();
        return NextResponse.json({ data });
    } else {
        return NextResponse.json({ error: 'Invalid endpoint' }, { status: 400 });
    }
}