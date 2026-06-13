"""initial schema"""
from alembic import op
import sqlalchemy as sa


revision = "0001_initial"
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "users",
        sa.Column("id", sa.Uuid(), primary_key=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("clerk_user_id", sa.String(255), nullable=False, unique=True),
        sa.Column("email", sa.String(255)),
        sa.Column("full_name", sa.String(255)),
        sa.Column("avatar_url", sa.Text()),
        sa.Column("learning_style", sa.String(50)),
        sa.Column("experience_level", sa.String(50)),
    )
    op.create_index("ix_users_clerk_user_id", "users", ["clerk_user_id"], unique=False)
    op.create_index("ix_users_email", "users", ["email"], unique=False)
    op.create_table(
        "assessments",
        sa.Column("id", sa.Uuid(), primary_key=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("user_id", sa.Uuid(), sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False),
        sa.Column("skill_level", sa.String(50), nullable=False),
        sa.Column("interests", sa.JSON(), nullable=False),
        sa.Column("learning_goals", sa.JSON(), nullable=False),
        sa.Column("study_hours_per_week", sa.Integer(), nullable=False),
        sa.Column("learning_style", sa.String(50), nullable=False),
        sa.Column("experience_level", sa.String(50), nullable=False),
        sa.Column("notes", sa.Text()),
    )
    op.create_table(
        "learning_paths",
        sa.Column("id", sa.Uuid(), primary_key=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("user_id", sa.Uuid(), sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False),
        sa.Column("assessment_id", sa.Uuid(), sa.ForeignKey("assessments.id", ondelete="SET NULL")),
        sa.Column("goal", sa.String(255), nullable=False),
        sa.Column("duration", sa.String(50), nullable=False),
        sa.Column("roadmap_json", sa.JSON(), nullable=False),
        sa.Column("status", sa.String(50), nullable=False),
        sa.Column("version", sa.Integer(), nullable=False),
    )
    op.create_table(
        "roadmap_modules",
        sa.Column("id", sa.Uuid(), primary_key=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("learning_path_id", sa.Uuid(), sa.ForeignKey("learning_paths.id", ondelete="CASCADE"), nullable=False),
        sa.Column("title", sa.String(255), nullable=False),
        sa.Column("difficulty", sa.String(50), nullable=False),
        sa.Column("estimated_weeks", sa.Integer(), nullable=False),
        sa.Column("order_index", sa.Integer(), nullable=False),
        sa.Column("status", sa.String(50), nullable=False),
        sa.Column("metadata_json", sa.Text()),
    )
    op.create_table(
        "resources",
        sa.Column("id", sa.Uuid(), primary_key=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("title", sa.String(255), nullable=False),
        sa.Column("resource_type", sa.String(50), nullable=False),
        sa.Column("source_url", sa.String(1024), nullable=False),
        sa.Column("description", sa.Text()),
        sa.Column("tags", sa.JSON(), nullable=False),
        sa.Column("skill_level", sa.String(50), nullable=False),
        sa.Column("goal", sa.String(255)),
        sa.Column("module_title", sa.String(255)),
        sa.Column("embedding_id", sa.String(255)),
    )
    op.create_table(
        "progress",
        sa.Column("id", sa.Uuid(), primary_key=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("user_id", sa.Uuid(), sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False),
        sa.Column("learning_path_id", sa.Uuid(), sa.ForeignKey("learning_paths.id", ondelete="SET NULL")),
        sa.Column("completed_modules", sa.JSON(), nullable=False),
        sa.Column("completion_percentage", sa.Float(), nullable=False),
        sa.Column("learning_streak", sa.Integer(), nullable=False),
        sa.Column("quiz_scores", sa.JSON(), nullable=False),
        sa.Column("study_time_minutes", sa.Integer(), nullable=False),
    )
    op.create_table(
        "quizzes",
        sa.Column("id", sa.Uuid(), primary_key=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("user_id", sa.Uuid(), sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False),
        sa.Column("learning_path_id", sa.Uuid(), sa.ForeignKey("learning_paths.id", ondelete="SET NULL")),
        sa.Column("module_title", sa.String(255), nullable=False),
        sa.Column("questions", sa.JSON(), nullable=False),
        sa.Column("metadata_json", sa.Text()),
    )
    op.create_table(
        "quiz_attempts",
        sa.Column("id", sa.Uuid(), primary_key=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("quiz_id", sa.Uuid(), sa.ForeignKey("quizzes.id", ondelete="CASCADE"), nullable=False),
        sa.Column("user_id", sa.Uuid(), sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False),
        sa.Column("score", sa.Float(), nullable=False),
        sa.Column("answers", sa.JSON(), nullable=False),
        sa.Column("time_taken_seconds", sa.Integer(), nullable=False),
    )
    op.create_table(
        "chat_history",
        sa.Column("id", sa.Uuid(), primary_key=True),
        sa.Column("created_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("updated_at", sa.DateTime(timezone=True), nullable=False, server_default=sa.func.now()),
        sa.Column("user_id", sa.Uuid(), sa.ForeignKey("users.id", ondelete="CASCADE"), nullable=False),
        sa.Column("role", sa.String(20), nullable=False),
        sa.Column("message", sa.Text(), nullable=False),
        sa.Column("metadata_json", sa.JSON(), nullable=False),
        sa.Column("session_id", sa.String(255)),
    )


def downgrade():
    op.drop_table("chat_history")
    op.drop_table("quiz_attempts")
    op.drop_table("quizzes")
    op.drop_table("progress")
    op.drop_table("resources")
    op.drop_table("roadmap_modules")
    op.drop_table("learning_paths")
    op.drop_table("assessments")
    op.drop_table("users")
