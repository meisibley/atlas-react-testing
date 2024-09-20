//FooBar.tsx
import { useState } from "react";

export function FooBar() {
    const [showFoo, setShowFoo] = useState(true);
    const [showBar, setShowBar] = useState(false);

    return (
        <div>
            {showFoo && <span>Foo</span>}
            {showBar && <span>Bar</span>}
            <button onClick={() => setShowFoo(!showFoo)}>
                Toggle Foo
            </button>
            <button onClick={() => setShowBar(!showBar)}>
                Toggle Bar
            </button>
        </div>
    );
}
