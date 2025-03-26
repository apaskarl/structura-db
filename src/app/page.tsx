import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="from-tertiary/20 to-light flex min-h-screen flex-col bg-linear-to-t">
      <div className="from-primary via-secondary to-tertiary h-[1vh] bg-linear-to-r" />

      <header className="flex items-center justify-between p-10">
        <div>
          {/* Logo */}
          <span className="text-primary flex items-center gap-x-2 text-xl">
            <Icon
              icon="material-symbols:schema-outline"
              className="text-primary size-7 rounded"
            />
            <span className="font-extrabold">
              structura<span className="font-light">DB</span>
            </span>
          </span>
        </div>

        <div className="flex items-center justify-between gap-x-8">
          <Link href="/auth/login" className="text-subtext">
            Log in
          </Link>
          <Link
            href="/auth/login"
            className="bg-secondary rounded-lg px-4 py-2 text-white shadow"
          >
            Try StructuraDB
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-y-10 px-10 pb-20">
        <div className="flex flex-col items-center justify-center gap-y-3 text-center">
          <h1 className="from-primary to-secondary h-max bg-gradient-to-r bg-clip-text py-2 text-5xl font-extrabold text-transparent">
            Build. Visualize. Optimize.
          </h1>
          <p className="text-subtext text-xl font-medium">
            Transform complex database structures into clear, organized models
          </p>
        </div>

        <div className="grid w-1/3 grid-cols-2 gap-x-5">
          <Link
            href="/auth/login"
            className="text-subtext rounded-lg bg-white px-4 py-3 text-center shadow"
          >
            Learn more
          </Link>
          <Link
            href="/auth/login"
            className="bg-secondary rounded-lg px-4 py-3 text-center text-white shadow"
          >
            Get started
          </Link>
        </div>
      </main>
    </div>
  );
}
