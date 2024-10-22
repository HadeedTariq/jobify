import PassionSelector from "@/components/PassionSelector";
import { Button } from "@/components/ui/button";
import UploadResume from "@/components/UploadResume";
import { pool } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AdditionalInfo = async () => {
  const user = await currentUser();
  if (!user?.id) return redirect("/sign-in");
  const { rows } = await pool.query(
    "select username from users where userid=$1 and passion<>'none'",
    [user.id]
  );
  if (rows.length > 0) return redirect("/");

  if (rows.length < 0) {
    await pool.query(
      "insert into users (username,email,userid) values ($1,$2,$3)",
      [user.fullName, user.emailAddresses[0].emailAddress, user.id]
    );
  }
  const registerUser = async (formData: FormData) => {
    "use server";
    const passion = formData.get("passion");
    const resume = formData.get("resume");
    // ogypr3xk
    // lmsproject
  };
  return (
    <div className="flex flex-col">
      <form action={registerUser}>
        <PassionSelector />
        <UploadResume />
        <Button type="submit">Update</Button>
      </form>
    </div>
  );
};

export default AdditionalInfo;
