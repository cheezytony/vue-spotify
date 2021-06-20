export type SpotifyAlbum = {
  album_type: 'album' | 'single' | 'compilation',
  artists: SpotifyArtist[],
  available_markets: string[],
  copyrights: SpotifyCopyright[],
  external_ids: unknown,
  external_urls: SpotifyExternalUrl,
  genres: string[],
  href: string,
  id: string,
  images: SpotifyImage[],
  name: string,
  popularity: number,
  release_date: string,
  release_date_precision: 'year' | 'month' | 'day',
  restrictions: SpotifyAlbumRestriction,
  total_tracks: number,
  tracks: SpotifyTrack[],
  type: 'album',
  uri: string,
}

export type SpotifyAlbumRestriction = {
  reason: 'market' | 'product' | 'explicit',
}

export type SpotifyArtist = {
  external_urls: SpotifyExternalUrl,
  followers: SpotifyFollowers,
  genres: string[],
  href: string,
  id: string,
  images: SpotifyImage[],
  name: string,
  popularity: number,
  type: 'artist',
  uri: string,
}

export type SpotifyCopyright = {
  text: string,
  type: 'C' | 'P',
};

export type SpotifyDevice = {
  id: string,
  is_active: boolean,
  is_private_session: boolean,
  is_restricted: boolean,
  name: string,
  type: 'computer' | 'smartphone' | 'speaker' | string,
  volume_percent: number,
}

export type SpotifyDevices = {
  devices: SpotifyDevice[],
}

export type SpotifyError = {
  message: string,
  status: number,
};

export type SpotifyExternalUrl = {
  spotify: string,
};

export type SpotifyFollowers = {
  href: string,
  total: number,
};

export type SpotifyImage = {
  url: string,
}

export type SpotifyOwner = {
  name: string
}

export type SpotifyPaging = {
  href: string,
  items: unknown[],
  limit: number,
  next: string,
  offset: number,
  previous: string,
  total: number,
}

export type SpotifyPlaylistTrack = {
  added_at: string,
  added_by: SpotifyPublicUser,
  is_local: boolean,
  track: SpotifyTrack,
}

export type SpotifyPrivateUser = {
  country: string,
  display_name: string,
  email: string,
  explicit_content: unknown,
  external_urls: SpotifyExternalUrl,
  followers: SpotifyFollowers,
  href: string,
  id: string,
  images: SpotifyImage[],
  product: 'user',
  type: 'user',
  uri: string,
}

export type SpotifyPublicUser = {
  display_name: string,
  external_urls: SpotifyExternalUrl,
  followers: SpotifyFollowers,
  href: string,
  id: string,
  images: SpotifyImage[],
  type: 'user',
  uri: string,
}

export type SpotifyPlaylist = {
  collaborative: boolean,
  description: string,
  external_urls: SpotifyExternalUrl,
  followers?: SpotifyFollowers,
  href: string,
  id: string,
  images: SpotifyImage[],
  name: string,
  owner: SpotifyOwner,
  public: boolean,
  snapshot_id: string,
  tracks: SpotifyTrack[],
  type: 'playlist',
  uri: string,
}

export type SpotifyTrack = {
  album?: SpotifyAlbum,
  artists: SpotifyArtist[],
  available_markets: string[],
  disc_number: number,
  duration_ms: number,
  explicit: boolean | 'unknown',
  external_ids?: unknown,
  external_urls: SpotifyExternalUrl,
  href: string,
  id: string,
  is_local: boolean,
  is_playable: boolean,
  linked_from: unknown,
  name: string,
  popularity: number,
  preview_url: string,
  restrictions: SpotifyTrackRestriction,
  track_number: number,
  type: 'track',
  uri: string,
}

export type SpotifyTrackRestriction = {
  reason: 'market' | 'product' | 'explicit' | string,
}
