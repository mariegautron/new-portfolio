import { PrismicRichText } from '@prismicio/react'
import React, { FC } from 'react'
import { CtaBannerSlice } from '../../types.generated'

const CtaBanner: FC<{ slice: CtaBannerSlice }> = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title ?
          <PrismicRichText field={slice.primary.title} />
          : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
        <PrismicRichText field={slice.primary.description} />
        : <p>start by editing this slice from inside Slice Machine!</p>
    }
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default CtaBanner