export interface Guest {
  id: string;
  name: string;
  allowedGuests: number;
}

export interface InvitationConfig {
  babyName: string;
  eventDate: string;
  eventTime: string;
  location: string;
  dressCode?: string;
  giftRegistry?: string;
  heroMessage: string;
  welcomeMessage: string;
  footerMessage: string;
  whatsappNumber: string;
  heroImage: string;
}
