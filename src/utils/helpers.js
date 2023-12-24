import { crumboStarters, crumboMiddles, crumboEnds } from "@/assets/crumbolists";

const getRand = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)]
}

export const randCrumbo = () => {
    const cs = getRand(crumboStarters)
    const cm = getRand(crumboMiddles)
    const ce = getRand(crumboEnds)
    return `Grandpa Crumbo's ${cs} ${cm} ${ce}`
}