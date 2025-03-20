import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema ({
    chats: defineTable({
        title: v.string(),
        userId: v.string(),
        createdAt: v.number(),
      }).index("by_user", ["userId"]),
    
      messages: defineTable({
        chatId: v.id("chats"),
        content: v.string(),
        role: v.union(
            v.literal("user"),
            v.literal("assistant")),
        createdAt: v.number(),
      }).index("by_chat", ["chatId"]),

      researchFiles: defineTable({
        name: v.string(), // Nama file
        type: v.string(), // pdf, docx, xlsx
        size: v.number(), // Ukuran dalam byte
        lastModified: v.string(), // Tanggal terakhir diubah
        content: v.optional(v.string()), // Teks dokumen (opsional)
        metadata: v.optional(v.string()), // Deskripsi singkat
        url: v.optional(v.string()), // Jika file disimpan di storage cloud
      }).index("by_name", ["name"]),
    

});