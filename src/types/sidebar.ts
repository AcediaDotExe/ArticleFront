export enum SidebarActionTypes {
    OPEN = 'OPEN',
    CLOSE = 'CLOSE',
}

export interface SidebarState {
    isSidebarOpen: boolean
}
export interface SidebarAction {
    type: SidebarActionTypes
}
