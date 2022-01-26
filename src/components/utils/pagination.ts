
export function getPageCount(totalCount: number, limit: number) {
    console.log(Math.ceil(totalCount / limit))
    return Math.ceil(totalCount / limit)
}