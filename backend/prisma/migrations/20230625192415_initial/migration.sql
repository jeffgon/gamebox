-- CreateTable
CREATE TABLE "games" (
    "game_id" SERIAL NOT NULL,
    "title" VARCHAR(255),
    "genre" VARCHAR(255),
    "platform" VARCHAR(255),
    "cover_photo" VARCHAR(255),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER,
    "review" INTEGER,
    "comment" VARCHAR,

    CONSTRAINT "games_pkey" PRIMARY KEY ("game_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "username" VARCHAR(255),
    "password" VARCHAR(255),
    "email" VARCHAR(255),
    "profile_photo" VARCHAR(255) DEFAULT 'https://www.promoview.com.br/uploads/images/unnamed%2819%29.png',
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "games" ADD CONSTRAINT "games_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
