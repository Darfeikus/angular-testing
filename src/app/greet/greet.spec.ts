i m p o r t { g r e e t } from
’./ greet ’ ;
d e s c r i b e ( ’ g r e e t ’ , ( ) = > {
// g r e e t s u i t
i t ( ’ s h o u l d i n c l u d e t h e name i n t h e m e s s a g e ’ , ( ) = > {
expect ( greet ( ’ adsoft ’ ) ) . toContain ( ’ adsoft ’ ) ;
} )
})
