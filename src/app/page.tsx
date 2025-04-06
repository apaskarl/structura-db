import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="from-tertiary/50 flex min-h-screen flex-col bg-linear-to-t to-white">
      <div className="from-primary via-secondary to-tertiary h-[1vh] bg-linear-to-r" />

      <header className="flex items-center justify-between px-10 py-8">
        <div>
          {/* Logo */}
          <span className="text-primary flex items-center gap-x-2 text-xl">
            <Icon
              icon="material-symbols:schema-outline"
              className="text-primary size-7 rounded"
            />
            <span className="font-extrabold">
              structura<span className="font-normal">DB</span>
            </span>
          </span>
        </div>

        <div className="flex items-center justify-between gap-x-10">
          <Link href="/auth/login" className="text-subtext font-medium">
            Log In
          </Link>
          <Link
            href="/auth/login"
            className="bg-primary rounded-lg px-4 py-2 font-medium text-white shadow"
          >
            Try StructuraDB
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-y-10 px-10 pb-20">
        <div className="flex flex-col items-center justify-center gap-y-3 text-center">
          <h1 className="from-primary to-secondary h-max bg-gradient-to-r bg-clip-text py-2 text-6xl font-extrabold text-transparent">
            Build. Visualize. Optimize.
          </h1>
          <p className="text-subtext text-xl font-medium">
            Transform complex database structures into clear, organized models
          </p>
        </div>

        <div className="grid w-1/3 grid-cols-2 gap-x-5">
          <Link
            href="/auth/login"
            className="text-primary rounded-lg bg-white px-4 py-3 text-center font-medium shadow"
          >
            Learn more
          </Link>
          <Link
            href="/auth/login"
            className="bg-primary rounded-lg px-4 py-3 text-center font-medium text-white shadow"
          >
            Get started
          </Link>
        </div>
      </main>
    </div>
  );
}
