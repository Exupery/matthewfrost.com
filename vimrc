set t_Co=256
" colorscheme devbox-dark-256 
colorscheme torte
hi CursorLine cterm=NONE ctermbg=darkblue ctermfg=white 
hi LineNr cterm=NONE ctermfg=245 ctermbg=238
set nofoldenable
set nobackup
set noswapfile
set history=1000 " Store a ton of history (default is 20)
set backspace=indent,eol,start " backspace for dummies
set linespace=0 " No extra spaces between rows
set nu " Line numbers on
set showmatch " show matching brackets/parenthesis
set incsearch " find as you type search
set hlsearch " highlight search terms
set winminheight=0 " windows can be 0 line high
set ignorecase " case insensitive search
set smartcase " case sensitive when uc present
set wildmenu " show list instead of just completing
set wildmode=list:longest,full " command <Tab> completion, list matches, then longest common part, then all.
set whichwrap=b,s,h,l,<,>,[,] " backspace and cursor keys wrap to
set scrolljump=5 " lines to scroll when cursor leaves screen
set scrolloff=3 " minimum lines to keep above and below cursor
set nowrap " don't wrap lines
set shiftwidth=4 " use indents of 4 spaces
set expandtab " tabs are spaces, not tabs
set tabstop=4 " an indentation every four columns
set softtabstop=4 " let backspace delete indent
set clipboard=unnamedplus
set showmode
set cursorline
set laststatus=2
set statusline=%<%f\ " Filename
set statusline+=%w%h%m%r " Options
set statusline+=\ [%{&ff}/%Y] " filetype
set statusline+=\ [%{getcwd()}] " current dir
set statusline+=%=%-14.(%l[%c]/%L%V%)\ %P

