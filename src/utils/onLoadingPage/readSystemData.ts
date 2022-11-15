function getSystemMode() {
    let systemDarkMode = false
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        systemDarkMode = true
    }
    return systemDarkMode
}

export const isSystemInDarkMode = getSystemMode()
