-- Table des leads du réseau amanihost.com
-- À exécuter dans le projet Supabase choisi (non appliqué automatiquement).

create table if not exists public.leads (
  id bigint generated always as identity primary key,
  cree_le timestamptz not null default now(),
  commune text not null,
  page text,
  projet text check (projet in ('gestion', 'location', 'vente')),
  chambres text,
  delai text,
  piscine boolean default false,
  climatisation boolean default false,
  vue_mer boolean default false,
  nom text not null,
  email text not null,
  telephone text not null,
  message text,
  consentement boolean not null,
  referer text,
  score smallint,
  statut text not null default 'nouveau' check (statut in ('nouveau', 'transmis', 'vendu', 'signe', 'perdu')),
  acheteur text,
  prix_vente numeric(10, 2)
);

create index if not exists leads_commune_idx on public.leads (commune, cree_le desc);

-- Aucun accès public : seule la fonction serveur (clé service) écrit dans la table
alter table public.leads enable row level security;

-- Candidatures des futurs concierges
create table if not exists public.candidatures (
  id bigint generated always as identity primary key,
  cree_le timestamptz not null default now(),
  nom text not null,
  ville text not null,
  email text not null,
  telephone text not null,
  residence text,
  anglais text,
  parcours text,
  demarrage text,
  consentement boolean not null,
  statut text not null default 'nouveau' check (statut in ('nouveau', 'echange', 'mise-en-situation', 'retenu', 'refuse'))
);
alter table public.candidatures enable row level security;
