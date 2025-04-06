import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import { motion } from "framer-motion";

const Onboarding = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  // Remove TypeScript annotations: currRole is just a plain JavaScript variable
  const navigateUser = (currRole) => {
    navigate(currRole === "recruiter" ? "/post-job" : "/jobs");
  };

  const handleRoleSelection = async (role) => {
    if (!user) return;

    try {
      await user.update({ unsafeMetadata: { role } });
      console.log(`Role updated to: ${role}`);
      navigateUser(role);
    } catch (err) {
      console.error("Error updating role:", err);
    }
  };

  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigateUser(user.unsafeMetadata.role);
    }
  }, [user]);

  // Loading spinner if user data is not loaded
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <BarLoader color="#36d7b7" width={"50%"} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl font-extrabold text-center tracking-tight"
      >
        I am a...
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl"
      >
        <Button
          onClick={() => handleRoleSelection("candidate")}
          className="h-32 sm:h-36 text-2xl rounded-xl transition-all hover:scale-105 bg-blue-600 hover:bg-blue-700"
        >
          Candidate
        </Button>
        <Button
          onClick={() => handleRoleSelection("recruiter")}
          className="h-32 sm:h-36 text-2xl rounded-xl transition-all hover:scale-105 bg-red-600 hover:bg-red-700"
        >
          Recruiter
        </Button>
      </motion.div>
    </div>
  );
};

export default Onboarding;
