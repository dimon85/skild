import { SignIn } from "@clerk/tanstack-react-start";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/__auth/sign-in/$")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section id="sign-in" className="mt-6">
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        fallbackRedirectUrl="/"
      />
    </section>
  );
}
