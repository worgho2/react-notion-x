import {
  type Color,
  type Decoration,
  type ID,
  type NumberFormat,
  type PropertyID,
  type PropertyType
} from './core'
import { type Formula } from './formula'

export interface SelectOption {
  id: ID
  color: Color
  value: string
}

export interface CollectionPropertySchema {
  name: string
  type: PropertyType
  options?: SelectOption[]
  number_format?: NumberFormat
  formula?: Formula
}

export interface CollectionPropertySchemaMap {
  [key: string]: CollectionPropertySchema
}

export interface Collection {
  id: ID
  version: number
  name: Decoration[]
  schema: CollectionPropertySchemaMap
  icon: string
  parent_id: ID
  parent_table: string
  alive: boolean
  copied_from: string
  template_pages?: Array<ID>

  format?: {
    collection_page_properties?: Array<{
      property: PropertyID
      visible: boolean
    }>
    property_visibility?: Array<{
      property: PropertyID
      visibility: 'show' | 'hide'
    }>
    hide_linked_collection_name?: boolean
  }
}
