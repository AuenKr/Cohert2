"use client";
import { useParams } from "next/navigation";
import { NextRequest } from "next/server";

export default function CourseId() {
    const { courseId } = useParams();
    return (
        <div>
            <h1>On course page {courseId}</h1>
        </div>
    );
}
