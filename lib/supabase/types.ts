export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          display_name: string | null
          avatar_url: string | null
          bio: string | null
          role: 'player' | 'developer'
          stripe_account_id: string | null
          stripe_onboarded: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          display_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          role?: 'player' | 'developer'
          stripe_account_id?: string | null
          stripe_onboarded?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          display_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          role?: 'player' | 'developer'
          stripe_account_id?: string | null
          stripe_onboarded?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      games: {
        Row: {
          id: string
          slug: string
          title: string
          tagline: string
          description: string | null
          genre: string
          cover_url: string | null
          game_url: string
          developer_id: string
          status: 'draft' | 'published' | 'archived'
          ai_tools: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          tagline: string
          description?: string | null
          genre: string
          cover_url?: string | null
          game_url: string
          developer_id: string
          status?: 'draft' | 'published' | 'archived'
          ai_tools?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          tagline?: string
          description?: string | null
          genre?: string
          cover_url?: string | null
          game_url?: string
          developer_id?: string
          status?: 'draft' | 'published' | 'archived'
          ai_tools?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      votes: {
        Row: {
          id: string
          user_id: string
          game_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          game_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          game_id?: string
          created_at?: string
        }
      }
      comments: {
        Row: {
          id: string
          user_id: string
          game_id: string
          body: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          game_id: string
          body: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          game_id?: string
          body?: string
          created_at?: string
          updated_at?: string
        }
      }
      donations: {
        Row: {
          id: string
          user_id: string
          game_id: string
          amount: number
          currency: string
          stripe_payment_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          game_id: string
          amount: number
          currency?: string
          stripe_payment_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          game_id?: string
          amount?: number
          currency?: string
          stripe_payment_id?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'player' | 'developer'
      game_status: 'draft' | 'published' | 'archived'
    }
  }
}
