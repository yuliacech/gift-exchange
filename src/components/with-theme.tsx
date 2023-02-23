
import '@elastic/eui/dist/eui_theme_light.css';
import { EuiProvider, EuiThemeProvider } from "@elastic/eui";

export const WithTheme = ({ children }: { children: React.ReactNode }) => {
    const overrides =
    {
        "colors": {
            "LIGHT": {
                "primary": "#226f61",
                "accent": "#ad242c",
                "success": "#226f61",
                "warning": "#ecdeb9",
                "danger": "#ad242c"
            },
            "DARK": {
                "primary": "#226f61",
                "accent": "#ad242c",
                "success": "#226f61",
                "warning": "#ecdeb9",
                "danger": "#ad242c"
            }
        }
    };
    return (
        <EuiProvider>
            <EuiThemeProvider modify={overrides}>
                {children}
            </EuiThemeProvider>
        </EuiProvider>
    );
}