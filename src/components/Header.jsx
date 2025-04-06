import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  UserButton,
  useUser
} from "@clerk/clerk-react";
import Logo from '/Logo.png';
import { PenBox, BriefcaseBusiness, Heart } from 'lucide-react';

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  // Handle URL parameter for sign-in modal
  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({}); // Clear search params when closing modal
    }
  };

  return (
    <>
      <nav className="py-4 flex justify-between items-center px-6">
        <Link to="/">
          <img src={Logo} alt="logo" className="h-14 w-14 rounded-full" />
        </Link>
        
        <div className='flex gap-8 items-center'>
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            {/* Show Post a Job button for recruiters only */}
            {user?.publicMetadata?.role === "recruiter" && (
              <Link to="/post-job">
                <Button variant='destructive' className="rounded-full">
                  <PenBox size={20} className='mr-2'/>
                  Post a Job
                </Button>
              </Link>
            )}
            <UserButton
              aria-label="User Menu"
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-job"
                />
                <UserButton.Action label="Manage Account" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {/* Overlay and SignIn Modal */}
      {showSignIn && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" 
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
        >
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <SignIn 
              signUpForceRedirectUrl="/onboarding"
              fallbackRedirectUrl="/onboarding"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
