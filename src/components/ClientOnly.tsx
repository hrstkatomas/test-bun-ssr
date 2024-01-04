import React, {useSyncExternalStore} from "react";

function useHydrated() {
    return useSyncExternalStore(
        () => () => {},
        () => true,
        () => false,
    );
}

export function ClientOnly({ children, fallback }: { children(): React.ReactNode;
    fallback?: React.ReactNode; }) {
    return useHydrated() ? <>{children()}</> : <>{fallback}</>;
}