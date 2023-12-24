import "./globals.css";
import GithubCorner from "@/components/github-corner/GithubCorner";

export const metadata = {
  title: "NextGram",
  description:
    "A sample Next.js app showing dynamic routing with modals as a route.",
  metadataBase: new URL("https://nextgram.vercel.app"),
};
const Layout = (props: { children: any }) => {
  return (
    <html>
      <body>
        <GithubCorner />
        {props.children}
      </body>
    </html>
  );
};

export default Layout;
