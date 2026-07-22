import Image from "next/image";

export default function ProjectGallery() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Dashboard */}

      <div className="group lg:col-span-2">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
          <Image
            src="/images/projects/oil-broker-dashboard.png"
            alt="Oil Broker Dashboard"
            width={1600}
            height={900}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            priority
          />
        </div>

        <div className="mt-3">
          <h3 className="text-lg font-semibold">
            Analytics Dashboard
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            A centralized dashboard providing business insights, daily
            transactions, reports and operational overview.
          </p>
        </div>
      </div>

      {/* Right Column */}

      <div className="space-y-6">
        {/* Login */}

        <div className="group">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/images/projects/oil-broker-login.png"
              alt="Login Screen"
              width={900}
              height={900}
              className="w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <h4 className="mt-3 font-semibold">
            Secure Authentication
          </h4>

          <p className="text-sm text-muted-foreground">
            JWT based login with protected routes.
          </p>
        </div>

        {/* Report */}

        <div className="group">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <Image
              src="/images/projects/oil-broker-report.png"
              alt="Report Page"
              width={900}
              height={900}
              className="w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <h4 className="mt-3 font-semibold">
            Smart Reports
          </h4>

          <p className="text-sm text-muted-foreground">
            Generate clean transaction reports with accurate calculations.
          </p>
        </div>
      </div>
    </div>
  );
}