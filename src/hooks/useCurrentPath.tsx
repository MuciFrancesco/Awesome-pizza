import { useLocation } from "react-router-dom"


export function useCurrentPath() {
    const location: any = useLocation()
    const route: any = location

    return route

}