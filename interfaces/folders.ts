export interface EditableFolder {
    title: string,
    id: number,
}

export interface CreateFolder {
    defaultPositionX: number,
    defaultPositionY: number,
    id: number,
    title: string,
}

export interface positionCursor {
    x: number,
    y: number,
}