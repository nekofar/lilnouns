import { default as accessories } from './accessories.json'
import { default as backgrounds } from './backgrounds.json'
import { default as bodies } from './bodies.json'
import { default as glasses } from './glasses.json'
import { default as heads } from './heads.json'
import { default as palette } from './palette.json'

export type Assets = {
  accessories: {
    data: string
    slug?: string
    name?: string
  }[]
  backgrounds: string[]
  bodies: {
    data: string
    slug?: string
    name?: string
  }[]
  glasses: {
    data: string
    slug?: string
    name?: string
  }[]
  heads: {
    data: string
    slug?: string
    name?: string
  }[]
  palette: string[]
}

export const assets: Assets = {
  accessories,
  backgrounds,
  bodies,
  glasses,
  heads,
  palette,
}
