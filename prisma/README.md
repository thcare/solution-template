## thfx prisma integration

we need to run `prisma generate` when authoring the solution package so that types are available.
in the future we could split it into two phases and have `prisma generate` here only output interfaces,
while `prisma generate` in web/api.th.care generates implementations.

we also need to run `prisma migrate dev` at some point before deploying the api build. I see a few options:

A: don't store migrations; they're always regenerated in the api build.
   this doesn't work with prisma, though in theory we could make it so that migrations are always idempotent and can
   be run repeatedly.

B: run `prisma migrate dev` in the api build after populating the migration folder from the last deployed build.
   this works, but adds state to the deploy pipeline that we don't have yet.

C: run `prisma migrate dev` in the solution build, and commit the results. copy them into api/ when building there.
   this is a bit weird, but I think ok in the short-term. B needs more infrastructure set up before it can be tested.

this folder holds the output of option C, as managed by the `thfx-prisma` wrapper
