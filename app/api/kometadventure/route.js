import connectMongoDB from "@/libs/mongodb";
import Kometadventure from "@/models/kometadventure";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description, price, discount, discountPercent } = await request.json();
    await connectMongoDB();
    await Kometadventure.create({ title, description, price, discount, discountPercent });
    return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const kometadventure = await Kometadventure.find();
    return NextResponse.json({ kometadventure });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Kometadventure.findByIdAndDelete(id);
    return NextResponse.json({ message: "Product Deleted" }, { status: 200 });
}