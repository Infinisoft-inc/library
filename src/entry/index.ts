/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import type { libType } from "../types"

export const entry = () => {
    const mytype: libType = {message: 'My type'}

    console.log(mytype.message)
}
