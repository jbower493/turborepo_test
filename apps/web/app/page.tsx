import { Button } from "@repo/ui/button";
import { Anchor } from "@repo/ui/anchor";
import { Box } from "@repo/ui/box";
import { Footer } from "@repo/ui/footer";

export default function Home() {
    return (
        <div>
            <main>
                <p>This is the web</p>
                <Button appName="Web">Do something</Button>
                <Anchor href="https://google.com">Click me</Anchor>
                <Box />
                <Footer />
            </main>
        </div>
    );
}
