import connectMongoDB from "@/libs/mongodb";
import Kometadventure from "@/models/kometadventure";
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
    const kometadventure = await Kometadventure.find();
    return NextResponse.json({ kometadventure });
}