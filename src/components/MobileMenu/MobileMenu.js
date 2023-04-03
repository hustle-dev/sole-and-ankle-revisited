/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
        {/* <button onClick={onDismiss}>Dismiss menu</button> */}
        <Filler />
        <DialogNav>
          <DialogNavLink href="/sale">Sale</DialogNavLink>
          <DialogNavLink href="/new">New&nbsp;Releases</DialogNavLink>
          <DialogNavLink href="/men">Men</DialogNavLink>
          <DialogNavLink href="/women">Women</DialogNavLink>
          <DialogNavLink href="/kids">Kids</DialogNavLink>
          <DialogNavLink href="/collections">Collections</DialogNavLink>
        </DialogNav>
        <DialogFooter>
          <DialogFooterLink href="/terms">Terms and Conditions</DialogFooterLink>
          <DialogFooterLink href="/privacy">Privacy Policy</DialogFooterLink>
          <DialogFooterLink href="/contact">Contact Us</DialogFooterLink>
        </DialogFooter>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background: rgba(96, 100, 108, 0.8);
  bottom: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  right: 0;
  top: 0;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 80%;
  height: 100%;
  margin-left: auto;
  padding: 32px;
  background: #ffffff;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const DialogNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const DialogNavLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: ${WEIGHTS.medium};
  line-height: 1.3125rem;
  color: ${COLORS.gray[900]};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const DialogFooter = styled.footer`
  display: flex;
  flex: 1;
  gap: 14px;
  flex-direction: column;
  justify-content: flex-end;
`;

const DialogFooterLink = styled.a`
  text-decoration: none;
  font-weight: ${WEIGHTS.normal};
  font-size: 0.875rem;
  line-height: 1rem;

  color: ${COLORS.gray[700]};
`;

export default MobileMenu;
