const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
async function main()
{
    await mongoose.connect('mongodb://127.0.0.1/whatsapp');
}
main().then((res)=>{console.log("MongoDB connected");}).catch((err)=>{console.log(err);})


let chats = [
    {
        from: "mina",
        to: "rina",
        msg: "send me your exam sheets",
        createdAt: new Date()
    },
    {
        from: "john",
        to: "doe",
        msg: "Can you review my code?",
        createdAt: new Date()
    },
    {
        from: "alice",
        to: "bob",
        msg: "Let's meet at the cafe at 3 PM.",
        createdAt: new Date()
    },
    {
        from: "charlie",
        to: "dave",
        msg: "Don't forget the meeting tomorrow!",
        createdAt: new Date()
    },
    {
        from: "emma",
        to: "frank",
        msg: "Happy birthday!",
        createdAt: new Date()
    },
    {
        from: "sara",
        to: "lisa",
        msg: "Are you coming to the party tonight?",
        createdAt: new Date()
    },
    {
        from: "jake",
        to: "mike",
        msg: "I'll send you the files by evening.",
        createdAt: new Date()
    },
    {
        from: "nina",
        to: "tom",
        msg: "How was your trip?",
        createdAt: new Date()
    },
    {
        from: "oliver",
        to: "lucas",
        msg: "Can you help me with this project?",
        createdAt: new Date()
    },
    {
        from: "sophia",
        to: "ava",
        msg: "Lunch tomorrow?",
        createdAt: new Date()
    }
];

Chat.insertMany(chats);