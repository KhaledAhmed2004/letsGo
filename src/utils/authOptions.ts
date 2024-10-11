// import nexiosInstance from "@/config/nexios.config";
// import { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
//   callbacks: {
//     async signIn({ account, profile }) {
//       // console.log(profile);
//       if (!profile || !account) {
//         return false;
//       }

//       // if (account.provider === "google") {
//       //   const res = await nexiosInstance.post("/auth/login", {
//       //     email: profile.email,
//       //   });
//       //   console.log("db res", res);
//       // }

//       if (account.provider === "google") {
//         try {
//           const res = await fetch("http://localhost:5000/api/auth/login", {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ email: profile.email }),
//           });

//           if (!res.ok) {
//             console.error("Failed to log in:", res.statusText);
//             return false;
//           }
//         } catch (error) {
//           console.error("Error during login:", error);
//           return false;
//         }
//       }

//       return true;
//     },
//   },
//   pages: { signIn: "/auth/signin" },
//   secret: process.env.NEXTAUTH_SECRET,
// };
