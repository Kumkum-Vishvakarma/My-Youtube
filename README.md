# My-Youtube

- Create React App
- Configured Tailwind CSS
- Header
- SideBar
- useDispatch Hook
- Created Redux store with appSlice
- Implemented hamburger menu click event to toggle sidebar visibility using Redux state
- Added Button List
- Added constants file
- WatchPage
- Debounced search optimization

## Features Implemented

### Layout System

- Fixed header navigation
- Collapsible sidebar (Redux-controlled)
- Responsive video grid layout
- Dynamic layout shift based on sidebar state
- Horizontal category button list

### State Management

- Redux store configuration
- `appSlice` for sidebar toggle
- `useDispatch` and `useSelector` integration
- `useState`

### Video System

- Fetching videos from YouTube API
- Dynamic video rendering
- Responsive video card layout
- Lazy-loaded thumbnails
- Embedded YouTube player

### Components

- Header (Search, Menu, Icons)
- Sidebar (Expanded & Collapsed modes)
- Button List (Scrollable categories)
- Video Container (Grid system)
- Video Cards (Thumbnail + Metadata)

### 🔍 Search Optimization System

Debouncing:

typing slow = 200ms
typing fast = 30ms

Performance:

- iphone pro max = 14 letters \* 1000 = 14000
- with debouncing = 3 API calls \* 1000 = 3000

Debouncing with 200ms

- if difference between 2 key strokes is < 200ms - Decline API call
- > 200ms make an API call
