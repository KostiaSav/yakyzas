import { Dispatch, SetStateAction } from "react"

export interface ISushi {
    _id: string,
    title: string,
    description: string,
    type: string,
    weight: number,
    quantity: number,
    price: number,
    image_src: string
}

export interface IState {
    isLoading: boolean,
    error: string
}

export interface ISushiState extends IState {
    data: ISushi[],
}

export interface IUserState extends IState {
    data: IUser[]
}

export interface ICommentsState extends IState {
    data: IComment[]
}

export interface IAccountState extends IState {
    data: ISushi[]
}

export interface IAdvantages {
    id: string,
    title: string,
    description: string
    image_src: string,
    color: string
}

export interface IUser {
    id: string,
    name: string,
    surname: string,
    password: string,
    tag: string,
    rating: number,
    comments_id?: string[],
    image_src: string
}

export interface IComment {
    _id: string,
    title: string,
    description: string,
    userId: string,
}

export interface INavigationPages {
    id: string,
    title: string,
    link: string
}

export interface IDecriptionItem {
    title: string,
    description: string,
}

export interface IDeliveryItem {
    title: string,
    description?: IDecriptionItem[],
    list?: string[],
    image?: string
}

export interface IDeliveryItemComponent {
    options: IDeliveryItem
}

export interface ITitle {
    children: string
}

export interface INavigationLayout {
    basket?: boolean
}

export interface IBasket {
    products?: IAccountState
}

export interface ICategoryChanger {
    category?: string,
    setCategory: Dispatch<SetStateAction<string | undefined>>,
}

export interface ICategory {
    _id?: string,
    title: string,
    description: string,
    image_src: string
}

export interface ICategoryEl extends ICategory {
    onClick?: () => undefined,
    category?: string,
}

export interface IProductList {
    category?: string
}