import { getServerSession } from "next-auth/next";
import { authOpttions } from "../../../pages/api/auth/[...nextauth]";
import prisma from "../libs/prismaDB";

export async function getSession() {
  return await getServerSession(authOpttions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email as string,
      },
    });
    if (!currentUser) {
      return null;
    }
    return currentUser;
  } catch (error) {
    return null;
  }
}
