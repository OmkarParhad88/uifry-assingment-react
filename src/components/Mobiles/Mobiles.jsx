import React from 'react'
import './Mobiles.css'

const Mobiles = ({ mobileTop, mobileLeft, mobileRight }) => {
  const styles = {
    top: mobileTop,
    left: mobileLeft,
    right: mobileRight
  }
  return (
    <>
      <div class="mobiles" style={styles}>
        <div class="mobile-1 mob-position">

          <img
            src="https://s3-alpha-sig.figma.com/img/923e/4e99/f7ec5c1bc8719985da6ba5bf67a1f7c2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VVl1VK9QvrvEc-0K5PoSx1GAL3xlquGzWMni~bKZUzHqh400fw-gAj-npIcIShnDYl2dhCXXOPCmNwOEDB~X20GNaLPqG1L1vJefrOxqknDGtVljbb9ZG0PNmoS0w1TnC4XFN68eKiNVgFf3Zg~QVd9F9tCpHd7zimW0QjY1rBRkvKm2ZqLoxZGFUFWxvQ-ipzK2o87XTsDh40lfin1NXYjj9Fr3PEMV8OiW6mIRNTrDjL3vWhXsdUbByyz3Ckktx5nOi5RatTqh9qHDkpb5wDRwpvJNoa4dSFdoenfjIrvM4dPmaKuZbxMhzxHJXT2eAG0Hx3ZTzwHObOznLj8cUg__"
            alt=""/>
          <img
            src="https://s3-alpha-sig.figma.com/img/70c7/3db3/adedea1eb449963aaf130b2e6a9dbf26?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c2GWrBctbbXRZnViy9IzSw-mz1ZfpXhkCAqHRdDMG403MWtz-LYCYnDpdu2wHQaV7D8QM5C0CE6pOQotA~fdv9eDx3CY8GGq8bRO7uYButXBEYq5je0Mtvvb37ZzOBaid7XDce2Ig~i9yjDB7dylqYmJvBUHTsURn~REMU8llYKOrhsKaZk-H~pMLtEkSFgtwkQ~OZX5l5~inqkjvjWOnIR004T3lvcH5kNA9f-mEg1vGlWSkDcagZXJToM~~8nLboH09jvs0yzMRdZbKUabqFBQNIpC5J-O-pPU1N8pRrmv68jHVtGiOgsRM1XOpYxpE4H~-LTQt~PR6PbVdvDTFQ__"
            alt=""/>
        </div>
        <div class="mobile-2 mob-position">

          <img
            src="https://s3-alpha-sig.figma.com/img/923e/4e99/f7ec5c1bc8719985da6ba5bf67a1f7c2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VVl1VK9QvrvEc-0K5PoSx1GAL3xlquGzWMni~bKZUzHqh400fw-gAj-npIcIShnDYl2dhCXXOPCmNwOEDB~X20GNaLPqG1L1vJefrOxqknDGtVljbb9ZG0PNmoS0w1TnC4XFN68eKiNVgFf3Zg~QVd9F9tCpHd7zimW0QjY1rBRkvKm2ZqLoxZGFUFWxvQ-ipzK2o87XTsDh40lfin1NXYjj9Fr3PEMV8OiW6mIRNTrDjL3vWhXsdUbByyz3Ckktx5nOi5RatTqh9qHDkpb5wDRwpvJNoa4dSFdoenfjIrvM4dPmaKuZbxMhzxHJXT2eAG0Hx3ZTzwHObOznLj8cUg__"
            alt=""/>
          <img
            src="https://s3-alpha-sig.figma.com/img/6bdf/d6fd/6f670c303fe64a21244a4e81142ed728?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U9hed-MJiK2xsHnAJAxqNgQGmz-Cqxg1JE7R9ZCj0bpjp0m3PpjMGShkuG9vT~8NOrGMRVZwxHdssIRCaMuYZbJqPQdbNLuqulHEafb8cXdqunZLYeVbc4EGTcEEcojflxpaGfonXm8ouucu1fmuIXuA~sxjPT5IvZ6d6eRTnx25DJgxjrWnpAacQmWpr01~08u~cgcQR2~s044enRnJIjX5hgN9hKtqRh4PUjNg55WdKahFt3Ae47ubupwq6Mjykd8r0ehmW7lNL3vrJ2kZPtGvhUsedBZkml2dAscX6Z66VzsVLT~yrrkqdkGbzpV2bXGMQx7MvvGblm1h-iFr1w__"
            alt=""/>
        </div>
        <div class="mobile-3 mob-position">

          <img
            src="https://s3-alpha-sig.figma.com/img/923e/4e99/f7ec5c1bc8719985da6ba5bf67a1f7c2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VVl1VK9QvrvEc-0K5PoSx1GAL3xlquGzWMni~bKZUzHqh400fw-gAj-npIcIShnDYl2dhCXXOPCmNwOEDB~X20GNaLPqG1L1vJefrOxqknDGtVljbb9ZG0PNmoS0w1TnC4XFN68eKiNVgFf3Zg~QVd9F9tCpHd7zimW0QjY1rBRkvKm2ZqLoxZGFUFWxvQ-ipzK2o87XTsDh40lfin1NXYjj9Fr3PEMV8OiW6mIRNTrDjL3vWhXsdUbByyz3Ckktx5nOi5RatTqh9qHDkpb5wDRwpvJNoa4dSFdoenfjIrvM4dPmaKuZbxMhzxHJXT2eAG0Hx3ZTzwHObOznLj8cUg__"
            alt=""/>
          <img
            src="https://s3-alpha-sig.figma.com/img/70c7/3db3/adedea1eb449963aaf130b2e6a9dbf26?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c2GWrBctbbXRZnViy9IzSw-mz1ZfpXhkCAqHRdDMG403MWtz-LYCYnDpdu2wHQaV7D8QM5C0CE6pOQotA~fdv9eDx3CY8GGq8bRO7uYButXBEYq5je0Mtvvb37ZzOBaid7XDce2Ig~i9yjDB7dylqYmJvBUHTsURn~REMU8llYKOrhsKaZk-H~pMLtEkSFgtwkQ~OZX5l5~inqkjvjWOnIR004T3lvcH5kNA9f-mEg1vGlWSkDcagZXJToM~~8nLboH09jvs0yzMRdZbKUabqFBQNIpC5J-O-pPU1N8pRrmv68jHVtGiOgsRM1XOpYxpE4H~-LTQt~PR6PbVdvDTFQ__"
            alt=""/>
        </div>
      </div>
    </>
  )
}

export default Mobiles
