import { PopupPanel } from '@/components/Panels/PopupPanel'
import React, { useState } from 'react'
import { ButtonsContainer, Content, Description, ImageContainer, Price, PriceContainer, Title } from './styled'
import { CoinIcon } from '@/components/Icons/CoinIcon'
import { BasicSubmitButton } from '@/components/Inputs/BasicSubmitButton'
import { IShopItem } from '@/types/types'
import { ShopImage } from './ShopImage'

type IShopItemInfo = IShopItem & {
  isOwned: boolean
  onItemSelected: () => void
  closeModal: () => void
}

export const ShopItemInfo = ({ title, description, price, isOwned, type, itemProps, onItemSelected, closeModal }: IShopItemInfo) => {
  const onPress = () => {
    onItemSelected()
    closeModal()
  } 

  return (
    <PopupPanel
      visible={true}
      title="▣ Item Info"
      onCloseModal={closeModal}
      style={{
        minHeight: '50%'
      }}
    >
      <Content>
        <Title>{title}</Title>
        <ImageContainer>
          <ShopImage type={type} itemProps={itemProps} />
        </ImageContainer>
        <Description>{description}</Description>
        {
          !isOwned &&
          <PriceContainer>
            <CoinIcon size={20} />
            <Price>{price}</Price>
          </PriceContainer>
        }
        <ButtonsContainer>
          <BasicSubmitButton title="Cancel" onPress={closeModal} />
          <BasicSubmitButton title={isOwned ? 'Select' : 'Buy'} onPress={onPress}/>
        </ButtonsContainer>
      </Content>
    </PopupPanel>
  )
}