// Code generated by prismic-ts-codegen. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Home documents */
interface HomeDocumentData {
    /**
     * Slice Zone field in *Home*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomeDocumentDataSlicesSlice>;
}
/**
 * Slice for *Home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = CtaBannerSlice;
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
export type AllDocumentTypes = HomeDocument;
/**
 * Primary content in CtaBanner → Primary
 *
 */
interface CtaBannerSliceDefaultPrimary {
    /**
     * Title field in *CtaBanner → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: cta_banner.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *CtaBanner → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: cta_banner.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for CtaBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CtaBanner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CtaBannerSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CtaBannerSliceDefaultPrimary>, never>;
/**
 * Slice variation for *CtaBanner*
 *
 */
type CtaBannerSliceVariation = CtaBannerSliceDefault;
/**
 * CtaBanner Shared Slice
 *
 * - **API ID**: `cta_banner`
 * - **Description**: `CtaBanner`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CtaBannerSlice = prismicT.SharedSlice<"cta_banner", CtaBannerSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomeDocumentData, HomeDocumentDataSlicesSlice, HomeDocument, AllDocumentTypes, CtaBannerSliceDefaultPrimary, CtaBannerSliceDefault, CtaBannerSliceVariation, CtaBannerSlice };
    }
}
