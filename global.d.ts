import type { FC, PropsWithChildren } from 'react'

declare global {
  export type ComponentType<P = object> = {
    className?: string
  } & PropsWithChildren &
    P
  export type Component<P = object> = FC<ComponentType & P>
}
